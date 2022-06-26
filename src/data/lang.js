import { reactive } from 'vue'

export const lang = reactive({
  value: 0,
  en(){
    this.value = 1;
  },
  sr(){
    this.value = 0;
  }
})