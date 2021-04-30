export class Data{
	public data: string;
	public nums: Number[];
	public mean: number;
	public Mean: number;
	public std: number;
	
	constructor(){
        this.data = undefined;
	}
	
	getnums(){
		var temp = this.data.split(',').map(function(item){
			return parseInt(item, 10);});
		this.nums = temp;
		return temp;
		}
	getmean(){
		this.getnums();
		var sum = 0;
		for(let i of this.nums){
			sum = sum + i.valueOf();
		}
		this.mean = sum/this.nums.length;
		return this.mean;

	}
	getstd(){
		this.Mean=this.getmean();
		var std=0.0;
		var s=0.0;
		for(let j of this.nums){
			s = s + Math.pow((j.valueOf()-this.Mean),2);
		}
		this.std = Math.sqrt(s/this.nums.length);
		return this.std;
	}

}
