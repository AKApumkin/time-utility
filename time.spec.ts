import * as time from "./time";
import { TestBed, async, inject } from "@angular/core/testing";
describe("the App: Bar", () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
      declarations: [time],
      });
  });
it(`Get the date in standard format`, async(() => {
    let theDate = time.getDateTime(false, 1479884400000);
    expect(theDate).toEqual("2016-11-23");
  }));
it(`Get the date in Long format with seconds`, async(() => {
    let theDate = time.getDateTime(true, 1149000);
    expect(theDate).toEqual("1970-01-01 08:19:09");
  }));
it(`Get the time in hours`, async(() => {
    let theDate = time.getDateTime(true, 1479884400000, "hour");
    expect(theDate).toEqual(15);
  }));
it(`Get the time in minutes`, async(() => {
    let theDate = time.getDateTime(true, 1479884400000, "minutes");
    expect(theDate).toEqual("00");
  }));
it(`Get the time seconds`, async(() => {
    let theDate = time.getDateTime(true, 1479884400000, "second");
    expect(theDate).toEqual("00");
  }));
it(`get the date in Chinese format`, async(() => {
    let theDate = time.getDateTimeChinese(false, 1479884400000);
    expect(theDate).toEqual("2016年 11月 23日");
  }));
  it(`get the date in Chinese format with seconds`, async(() => {
    let theDate = time.getDateTimeChinese(true, 1479884400000);
    expect(theDate).toEqual("2016年 11月 23日 15:00:00");
  }));
  it(`get the date of the begining of the day as a date`, async(() => {
    let theDate = time.getDateTime(true, time.getDateTimeDayStart(true, 2016,11,25));
    expect(theDate).toEqual("2016-11-25 00:00:00");
  }));
  it(`get the date of the end of the day as a date`, async(() => {
    let theDate = time.getDateTime(true, time.getDateTimeDayEnd(true, 2016,11,25));
    expect(theDate).toEqual("2016-11-25 23:59:59");
  }));
});