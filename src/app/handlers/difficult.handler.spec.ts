import { TestBed } from "@angular/core/testing";

import { DifficultHandler } from "./difficult.handler";

describe("DifficultService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: DifficultHandler = TestBed.get(DifficultHandler);
    expect(service).toBeTruthy();
  });
});
