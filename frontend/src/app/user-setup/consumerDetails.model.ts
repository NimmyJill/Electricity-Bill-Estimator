export class ConsumerDetailsModel {
  constructor(
    public consumerNumber: string,
    public consumerName: string,
    public houseName: string,
    public lastBillAmount: number,
    public lastMeterReading: number,
    public lastMeterReadingDate: Date,
    public connectionType: string
  ) {}
}
