import { shallowMount, createLocalVue  } from '@vue/test-utils'
import Cart from '@/pages/Cart.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()


describe('Cart.vue', () => {
  it('renders props.msg when passed', async () => {
    const msg = 'Bulma'
    const wrapper = 
shallowMount(Cart, {
  localVue,
  router,
     stubs: ['Layout']
})
    await wrapper.setData({
      shopContent: [
        {
        "id": 129,
        "nom": "Bulma",
        "prix": 35,
        "categories": [
            "/api/categories/7"
        ],
        "createdAt": "2021-04-28T13:24:08+00:00",
        "carts": []
    }, {
        "id": 130,
        "nom": "Frelon saké",
        "prix": 50,
        "categories": [
            "/api/categories/5"
        ],
        "createdAt": "2021-04-28T13:24:30+00:00",
        "carts": []
    }
      ]})
    expect(wrapper.vm.getProductById(129).nom).toMatch(msg)
  })
})




