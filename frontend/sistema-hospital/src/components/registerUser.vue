<template>
<h1 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
           Registrar usuario
        </h1>
        
   
        <div class="flex flex-wrap -mx-3">
        <div class="w-full p-8 lg:w-1/2">
          <Personas/>
        </div>
        
        <div class="w-full p-8 lg:w-1/2">
          <Usuarios/>
        </div>
      </div>


</template>

<script>

import Personas from './Personas.vue'
import Usuarios from './Usuarios.vue'


export default {
  components : {
    Personas,
    Usuarios
  }
};
</script>

