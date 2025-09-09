import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchUsers } from '../api/fetchUsers'
import { User, UsersResponse } from '../types/types'
import { useRef, useState } from 'react'

type Props = {
  initialUsers: User[]
}

export const usePaginatedUsers = ({ initialUsers }: Props) => {
  const [isDialogOpen, setDialogOpen] = useState(false)
  const scrollTargetRef = useRef<HTMLDivElement>(null)

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, ...rest } =
    useInfiniteQuery<UsersResponse, Error>({
      queryKey: ['users'],
      queryFn: ({ pageParam = 1 }) => fetchUsers(pageParam as number, 6),
      getNextPageParam: (lastPage) =>
        lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
      initialPageParam: 1,
      initialData: {
        pages: [
          {
            success: true,
            total_pages: 1,
            total_users: initialUsers.length,
            count: initialUsers.length,
            page: 1,
            links: { next_url: null, prev_url: null },
            users: initialUsers,
          },
        ],
        pageParams: [1],
      },
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

  return {
    data: users,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    scrollToNewItems,
    scrollTargetRef,
    isDialogOpen,
    setDialogOpen,
    ...rest,
  }
}
