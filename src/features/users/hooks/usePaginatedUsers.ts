import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchUsers } from '../api/fetchUsers'
import { UsersResponse } from '../types/types'
import { useLayoutEffect, useRef } from 'react'

export const usePaginatedUsers = () => {
  const scrollTargetRef = useRef<HTMLDivElement>(null)

  const { data, isFetchingNextPage, ...rest } = useInfiniteQuery<
    UsersResponse,
    Error
  >({
    queryKey: ['users'],
    queryFn: ({ pageParam = 1 }) => fetchUsers(pageParam as number, 6),
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    initialPageParam: 1,
  })

  const users = data?.pages.flatMap((p) => p.users) ?? []

  const scrollToNewItems = () => {
    if (scrollTargetRef.current) {
      scrollTargetRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      })
    }
  }

  const prevLengthRef = useRef(users.length)

  useLayoutEffect(() => {
    if (users.length > prevLengthRef.current) {
      scrollToNewItems()
    }
    prevLengthRef.current = users.length
  }, [users.length])

  return {
    data: users,
    scrollToNewItems,
    scrollTargetRef,
    isFetchingNextPage,
    ...rest,
  }
}
