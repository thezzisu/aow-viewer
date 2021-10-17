import { ref } from 'vue'

interface IAowFile {
  path: string
  url: string
}

export const files = ref<IAowFile[]>([])
export const index = ref<number>(0)

export async function processFile(file: File) {
  const content = await file.text()
  files.value = JSON.parse(content).map(([path, url]: [string, string]) => ({ path, url }))
  index.value = 0
}
