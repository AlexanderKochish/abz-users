import { useSearchParams, useRouter, usePathname } from 'next/navigation'

export const useQueryParams = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const setQueryParam = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString())

    if (value === null) {
      params.delete(key)
    } else {
      params.set(key, value)
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const getQueryParam = (key: string) => {
    return searchParams.get(key)
  }

  return { setQueryParam, getQueryParam }
}
