// let service = new Worker("something.js")
// service.addEventListener("message",F1)
// service.addEventListener("message",F2)
// service.removeEventListener("message",F3)
// function F1(){
// }
// function F2(){
// }
// function F3(){
// }

// let service = new Worker("something.js")
// service.onmessage = F1
// service.onmessage = F2
// service.onmessage = F3
// function F1(){
// }
// function F2(){
// }
// function F3(){
// }
 
 
// class CustomEvent{
// 	handlers = []
// 	constructor(name){
// 		this.name = name
// 	}
// 	subscribe(fn){
// 		this.handlers.push(fn)
// 	}
// 	unsubscribe(fn){
// 		this.handlers = this.handlers.filter(f => f!= fn)
// 	}
// 	fire(params,context = globalThis){
// 		this.handlers.forEach((item)=>{
// 			item.call(context,params)
// 		})
// 	}
// }
// function f1(obj = {}){
// 	console.log("F1",obj);
// }
// function f2(obj = {}){
// 	console.log("F2",obj);
// }

// let event = new CustomEvent("message")
// event.subscribe(f1)
// event.subscribe(f2)

// event.fire({x:4})

// event.unsubscribe(f2)
// event.fire()

// class User {
// 	constructor(name,surname){
// 		this.name = name
// 		this.surname = surname
// 	}
// 	valueOf(){
// 		return "I'm"+ " " + this.name + " " + this.surname
// 	}
// }
// let u1 = new User("Franz","Kafka")
// console.log("Hello," + u1);

// class Writer {
// 	constructor(user,century,famousBook){
// 		this.name = user.valueOf()
// 		this.century = century
// 		this.famousBook = famousBook
// 	}
// 	about(){
// 		return `${this.name},${this.century}th century writer.
// 					I'm best known for my book-
//                ${this.famousBook}`
// 	}
// }
// let u2 = new Writer(u1,20,"The Metamorphosis")
// console.log(u2.about());

class Iterator{
	index = 0
	constructor(...items){
		this.items = items
	}
	reset = ()=> this.index = 0
	next = ()=> this.items[this.index++]
	hasNext = ()=> this.index <= this.items.length

	first = () =>{
			this.reset()
			return this.next()
	}
	each = (fn) =>{
		for (let item = this.first();this.hasNext();item = this.next()){
					fn(item)
		}
	}
}
let a = new Iterator([1,2,3,4,5,6])
a.each((elm)=> console.log(elm))