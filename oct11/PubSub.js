class PubSub {
    constructor(){ this.events={}; }
    subscribe(event, fn){ (this.events[event] = this.events[event] || []).push(fn); }
    publish(event, data){ (this.events[event]||[]).forEach(fn=>fn(data)); }
}
const ps = new PubSub();
ps.subscribe('msg', console.log);
ps.publish('msg', 'Hello World');