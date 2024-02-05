class queue {
    constructor() {
        this.items = [];
        this.size = 5;
        this.head = 0;
        this.tail = this.items.length - 1;
    }
    print() {
        console.log(this.items);
    }
    push(element) {

        this.items[this.items.length] = element;
    }
    shift() {
        if (this.items.length == 1) {
            console.log("one element is required");
        }
        else {
            for (let i = 0; i < this.items.length - 1; i++) {
                this.items[i] = this.items[i + 1];
            }
            this.items.length = this.items.length - 1
        }
    }
  
}
const data = new queue();


data.push(1)
data.push(2)
data.push(3)
data.push(4)
data.push(5)
data.push(544444)
data.push(55557)


data.shift()
data.shift()
data.shift()
data.shift()

data.print()

