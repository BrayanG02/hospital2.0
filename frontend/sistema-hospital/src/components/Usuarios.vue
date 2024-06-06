<template>
    <h1 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
               Registrar usuario
            </h1>
            
      <div class="flex items-center justify-center p-12">
      
        <!-- Author: FormBold Team -->
        <div class="mx-auto w-full max-w-[550px] bg-white">
        <h4 class="mt-1 text-center text-2xl leading-9 font-extrabold text-gray-900">Hospital privilige care app</h4>
          <form @submit.prevent="submitForm">
            <div class="flex flex-wrap -mx-3">
              <div class="w-full md:w-1/2 px-3 mb-5">
                <label for="nombre" class="mb-3 block text-base font-medium text-[#07074D]">
                  Usuario
                </label>
                <input type="text" name="usuario" id="user" placeholder="usuario"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              <div class="w-full md:w-1/2 px-3 mb-5">
                <label for="primer-apellido" class="mb-3 block text-base font-medium text-[#07074D]">
                  Contraseña
                </label>
                <input type="text" name="contraseña" id="password" placeholder="Contraseña"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              <div class="w-full px-3">
                
                <RouterLink to="/dahsboard">
                <button
                  class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Iniciar sesión
                </button>
                </RouterLink>
                <a href="/"
                    class="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                     ¿Ya tienes cuenta?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      methods: {
        submitForm() {
          // Handle form submission
          alert("Formulario enviado");
        }
      }
    };
    </script>
    
    