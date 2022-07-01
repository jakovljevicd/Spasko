import { reactive } from 'vue'

export const lang = reactive({
  switch(){
    let value = (this.get() == 1) ? 0 : 1;
    localStorage.setItem("lang", value);
  },
  get(){
    let value = localStorage.getItem("lang") || 0;
    return value;
  }
})