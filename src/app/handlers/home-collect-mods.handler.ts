import { Injectable } from "@angular/core";

@Injectable()
export class HomeCollectModsHandler {
  private _default: number = 0;
  private _list: Array<any> = [
    {
      label: "jhabite_nantes",
      type: "tri_extension", // ceci n'est plus modifié ensuite selon l'adresse
      canAddress: false,
      mco: "modco_sacjaune,modco_sacbleu",
      address: {},
    },
    {
      label: "jhabite_extension",
      type: "tri_extension",
      canAddress: false,
      mco: "modco_bacbleunantes,modco_bacjaunenantes",
      address: {},
    },
    {
      label: "jhabite_hors_nantes",
      type: "tri_normal",
      mco: "modco_bacbleuhorsnantes,modco_bacjaunehorsnantes",
      canAddress: false,
    },
  ];
  constructor() {}

  init() {
    if (!localStorage.getItem("homeCollectMods")) this.set(this.getDefault());
  }

  getDefault() {
    return this._list[this._default];
  }

  getList() {
    return this._list;
  }

  /**
   * Retourne les preferences homeCollectMods
   */
  get() {
    return localStorage.getItem("homeCollectMods")
      ? JSON.parse(localStorage.getItem("homeCollectMods"))
      : this.getDefault();
  }
  /**
   * Sauvegarde les preferences homeCollectMods
   * @param collect any
   */
  set(collect: any) {
    if (collect.address && collect.address.mco) {
      collect.type =
        collect.address.mco === "modco_bacbleunantes,modco_bacjaunenantes"
          ? "tri_extension"
          : "tri_normal";
      collect.mco = collect.address.mco;
    }
    localStorage.setItem("homeCollectMods", JSON.stringify(collect));
    return collect;
  }
}
