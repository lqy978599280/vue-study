import Vue from 'vue'

// 传入一个组件配置
// 创建它的实例，并且将它挂载到body上
// 返回组件实例
export default function create(Component, props) {
  // 实例创建
  // extend方法返回的组件构造函数
  const Ctor = Vue.extend(Component)
  // console.log(Ctor);
  const comp = new Ctor({ propsData: props }).$mount()  //$mount()本质上将vdom=》dom
  // console.log(comp)
  //暗号：村长喊你来搬砖

  // 通过vm.$el获取生成的dom
  document.body.appendChild(comp.$el)

  // 删除函数
  // 获取组件实例
  // const comp = vm.$children[0]

  comp.remove = () => {
    document.body.removeChild(comp.$el)
    comp.$destroy()
  }

  // 方式二：借鸡生蛋
  // const vm = new Vue({
  //   render(h) {
  //     return h(Component, { props })
  //   }
  // }).$mount()
  return comp
}