import { defineComponent, shallowRef, onBeforeMount, h, Component, defineAsyncComponent } from 'vue'

const layouts:{ [name:string]:Component } = Object.entries(import.meta.glob('./layouts/**.vue')).reduce((layouts, [file_name, layout]) => ({ [file_name.match(/^\.\/layouts\/(.*)\.vue$/)![1].toLocaleLowerCase() ]: defineAsyncComponent(layout), ...layouts }), {})

export default defineComponent({
  setup() {
    const layout = shallowRef<Component>()
    setLayout('default')

    function setLayout(name:string) {
      if (!layouts[name]) throw new Error(`No layout with name ${ name }`)
      layout.value = layouts[name]
      return layout.value
    }

    return () => {
			let $layout = layout.value ? h(layout.value) : h('div')
			return $layout
    }
	}
})
