import { TestBed } from "@angular/core/testing";

import { HomeCollectModsHandler } from "./home-collect-mods.handler";

describe("HomeCollectModsService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: HomeCollectModsHandler = TestBed.get(HomeCollectModsHandler);
    expect(service).toBeTruthy();
  });
});
