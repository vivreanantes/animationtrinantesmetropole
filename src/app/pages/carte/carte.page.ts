import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ElementRef,
  HostListener,
} from "@angular/core";
import { ModalController } from "@ionic/angular";
import { latLng, tileLayer, Map, marker, icon } from "leaflet";
import { DataService } from "../../services/data.service";
import { LangageService } from "../../services/langage.service";
import { StructurePage } from "../structure/structure.page";

declare var _paramFilterTypeMapDatas: Array<any>;

@Component({
  selector: "app-carte",
  templateUrl: "./carte.page.html",
  styleUrls: ["./carte.page.scss"],
})
export class CartePage implements OnInit {
  @ViewChildren("btnMarker") btnMarkers: QueryList<ElementRef>;
  items: Array<any> = [];
  markers: Array<any> = [];
  filtres: Array<any> = _paramFilterTypeMapDatas;
  filtresSelected: Array<any> = [];
  filtresShowed: boolean = false;
  userMarker: any = null;
  map: Map;
  currentPosition: any;
  geolocationsubscribe: any;
  defaultGeo: any = {
    latitude: localStorage.getItem("geo.defaultLat")
      ? localStorage.getItem("geo.defaultLat")
      : 47.240987,
    longitude: localStorage.getItem("geo.defaultLong")
      ? localStorage.getItem("geo.defaultLong")
      : -1.8,
    zoom: localStorage.getItem("geo.zoomInit")
      ? localStorage.getItem("geo.zoomInit")
      : 10,
  };
  isDrag: boolean = false;
  langage: string;
  translate: any;

  options: any = {
    layers: [
      tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "Openstreetmap",
      }),
    ],
    zoom: this.defaultGeo.zoom,
    center: latLng(this.defaultGeo.latitude, this.defaultGeo.longitude),
  };
  constructor(
    private modalController: ModalController,
    private dataService: DataService,
    private langageService: LangageService
  ) { }


  ngOnInit() {
    const t = this;
    this.langage = this.langageService.get();
    this.langageService.translate(["voir_fiche"]).then((t) => {
      this.translate = t;
    });
    this.showFiltres();
    this.geolocationsubscribe = navigator.geolocation.watchPosition(
      function (position) {
        if (!t.userMarker) {
          t.userMarker = marker(
            latLng(position.coords.latitude, position.coords.longitude),
            {
              icon: icon({
                iconSize: [30, 30],
                iconAnchor: [15, 15],
                iconUrl: "assets/icons/marker-cible.png",
              }),
            }
          );
          t.markers.push(t.userMarker);
        } else {
          t.userMarker.setLatLng(
            latLng(position.coords.latitude, position.coords.longitude)
          );
        }

        localStorage.setItem("latitude", position.coords.latitude.toString());
        localStorage.setItem("longitude", position.coords.longitude.toString());
        t.currentPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        if (t.isDrag === false) {
          t.map.panTo(
            latLng(position.coords.latitude, position.coords.longitude)
          );
        }
      },
      function (error) { },
      {
        maximumAge: 0,
        timeout: 10000,
        enableHighAccuracy: true,
      }
    );
  }

  ionViewDidLeave() {
    if (this.geolocationsubscribe)
      navigator.geolocation.clearWatch(this.geolocationsubscribe);
  }

  async showFiltres() {
    this.filtresShowed = true;
  }

  selectFiltre(item) {
    item.selected = !item.selected;
  }

  onFiltreChange(filtres: Array<any>) {
    this.filtresShowed = false;
    let filtresKey = [];
    let filtresSelected = filtres.filter((item) => {
      if (item.selected === true) {
        let codes = item.code;
        codes = codes.split(",");
        codes.map((code) => {
          filtresKey.push(code);
        });
        return true;
      }
      return false;
    });
    filtresSelected.map((filtre) => {
      this.filtresSelected[filtre.id] = filtre;
    });

    let structurePromise = new Promise((resolve, reject) => {
      this.dataService
        .get("nantes/StructuresDatas.json")
        .then((data) => {
          let structures = data._structuresDatas.filter((item) => {
            return filtresKey.indexOf(item.type) > -1;
          });
          resolve(structures);
        })
        .catch(reject);
    });

    let ContainerPromise = this.dataService.find(
      "nantes/ContainersDatas.js",
      undefined,
      (item) => {
        if (item.modesCollecte) {
          let collects = item.modesCollecte.split(",");
          return (
            filtresKey.filter((e) => collects.indexOf(e) !== -1).length > 0
          );
        }
        return false;
      }
    );
    this.markers = [this.userMarker];
    Promise.all([structurePromise, ContainerPromise]).then((resolves) => {
      resolves.map((resolve, indexResolve) => {
        this.items = this.items.concat(resolve);
        resolve.map((item, index) => {
          if (item.latitude && item.longitude) {
            const newMarker = marker(
              latLng(parseFloat(item.latitude), parseFloat(item.longitude)),
              {
                icon: icon({
                  iconSize: [25, 41],
                  iconAnchor: [13, 41],
                  iconUrl: this.filtresSelected[item.carteMarqueur].image,
                }),
              }
            );
            let code = item.code ? item.code : item.openstreetmap_id; // Certaines structure n'ont pas de code et d'autre pas d'id osm
            let key =
              this.langage === "fr" ? "cartePopupText" : "cartePopupText_en";
            let popupText = item[key] ? item[key] : "";
            newMarker.bindPopup(
              `<p>${popupText}</p>
              <button class="button-marker" data-guid="${code}" #btnMarker>${this.translate["voir_fiche"]}</button>`,
              {
                autoPan: true,
              }
            );
            this.markers.push(newMarker);
          }
        });
      });
    });
  }

  @HostListener("document:click", ["$event"]) clickout(event) {
    if (event.target.classList.contains("button-marker")) {
      let item = this.items.find((i) => {
        return (
          i.code === event.target.getAttribute("data-guid") ||
          i.openstreetmap_id === event.target.getAttribute("data-guid")
        );
      });
      if (item) this.onVoirFiche(item);
    }
  }
  async onVoirFiche(item) {
    const modal = await this.modalController.create({
      component: StructurePage,
      componentProps: {
        fiche: item,
      },
    });
    return await modal.present();
  }
  onMapLoaded(map: Map) {
    this.map = map;
    setTimeout(() => {
      map.invalidateSize();
    }, 300);
  }

  onMapMove(event: any) {
    if (this.map) {
      this.isDrag = true;
    }
  }

  recenter() {
    if (this.currentPosition.latitude) {
      this.map.panTo(
        latLng(this.currentPosition.latitude, this.currentPosition.longitude)
      );
      this.isDrag = false;
    }
  }
}
