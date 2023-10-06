export class Quote{
    private _codein:string;
    private _name:string;
    private _high:string;
    private _low:string;
    private _varBid:string;
    private _pctChange:string;
    private _bid:string;
    private _ask:string;
    private _timestamp:string;
    private _create_date:string;

    constructor(){
        this._codein = "";
        this._name = "";
        this._high = "";
        this._low = "";
        this._varBid = "";
        this._pctChange = "";
        this._bid = "";
        this._ask = "";
        this._timestamp = "";
        this._create_date = "";
    }

    get codein(): string {
        return this._codein;
      }
    
      set codein(value: string) {
        this._codein = value;
      }
    
      get name(): string {
        return this._name;
      }
    
      set name(value: string) {
        this._name = value;
      }
    
      get high(): string {
        return this._high;
      }
    
      set high(value: string) {
        this._high = value;
      }
    
      get low(): string {
        return this._low;
      }
    
      set low(value: string) {
        this._low = value;
      }
    
      get varBid(): string {
        return this._varBid;
      }
    
      set varBid(value: string) {
        this._varBid = value;
      }
    
      get pctChange(): string {
        return this._pctChange;
      }
    
      set pctChange(value: string) {
        this._pctChange = value;
      }
    
      get bid(): string {
        return this._bid;
      }
    
      set bid(value: string) {
        this._bid = value;
      }
    
      get ask(): string {
        return this._ask;
      }
    
      set ask(value: string) {
        this._ask = value;
      }
    
      get timestamp(): string {
        return this._timestamp;
      }
    
      set timestamp(value: string) {
        this._timestamp = value;
      }
    
      get create_date(): string {
        return this._create_date;
      }
    
      set create_date(value: string) {
        this._create_date = value;
      }


}