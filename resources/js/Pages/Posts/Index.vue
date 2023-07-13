<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { useForm, Head, Link } from "@inertiajs/vue3";

defineProps({
  posts: Array,
});
const form = useForm({});
function destroy(id) {
  if (confirm("Are you sure you want to Delete")) {
    form.delete(route("posts.destroy", id));
  }
}
</script>
<template>
  <Head title="Posts" />
  <AuthenticatedLayout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">Posts</h2>
    </template>
    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-2 lg:px-2 space-y-6">
        <div class="p-4 sm:p-4 bg-white shadow sm:rounded-lg">
          <Link :href="route('posts.create')" as="button" class="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Tambah </Link>
        </div>
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3">No</th>
                <th scope="col" class="px-6 py-3">Judul</th>
                <th scope="col" class="px-6 py-3">Kategori</th>
                <th scope="col" class="px-6 py-3">Konten</th>
                <th scope="col" class="px-6 py-3">Tgl Terbit</th>
                <th scope="col" class="px-6 py-3">Penulis</th>
                <th scope="col" class="px-6 py-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <!-- Baris 1 -->
              <tr v-for="post in posts" class="bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">{{ post.id }}</th>
                <td class="px-6 py-4">{{ post.judul }}</td>
                <td class="px-6 py-4">{{ post.kategori }}</td>
                <td class="px-6 py-4">{{ post.konten }}</td>
                <td class="px-6 py-4">{{ post.created_at }}</td>
                <td class="px-6 py-4">{{ post.penulis }}</td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                    <Link :href="route('posts.edit', post.id)" class="mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Edit </Link>
                    <button @click="destroy(post.id)" tabIndex="-1" type="button" className="mx-1 px-4 py-[10px] text-sm text-white bg-red-500 hover:bg-red-700 rounded">Hapus</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>
