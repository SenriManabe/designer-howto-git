export default async function (ctx, inject) {
  const icons = {"64x64":"/_nuxt/icons/icon_64.5973b8.png","120x120":"/_nuxt/icons/icon_120.5973b8.png","144x144":"/_nuxt/icons/icon_144.5973b8.png","152x152":"/_nuxt/icons/icon_152.5973b8.png","192x192":"/_nuxt/icons/icon_192.5973b8.png","384x384":"/_nuxt/icons/icon_384.5973b8.png","512x512":"/_nuxt/icons/icon_512.5973b8.png"}
  const getIcon = size => icons[size + 'x' + size] || ''
  inject('icon', getIcon)
}
