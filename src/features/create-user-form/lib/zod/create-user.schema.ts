import { z } from 'zod'

const RFC2822_EMAIL_REGEX =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

export const createUserSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .regex(RFC2822_EMAIL_REGEX, 'Must be a valid email according to RFC2822'),
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(60, 'Name must be less 60 characters'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(
      /^\+380\d{9}$/,
      'Phone must start with +380 and contain 9 additional digits (e.g., +380501234567)'
    ),
  photo: z
    .instanceof(File, { message: 'Photo is required' })
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: 'The photo size must not be greater than 5 Mb',
    })
    .refine((file) => ['image/jpeg', 'image/jpg'].includes(file.type), {
      message: 'The photo format must be JPEG/JPG type',
    })
    .refine(
      async (file) => {
        return await checkImageDimensions(file)
      },
      {
        message: 'Minimum size of photo 70x70px',
      }
    ),
  position_id: z.number('Position is required'),
})

async function checkImageDimensions(file: File): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image()
    const url = URL.createObjectURL(file)

    img.onload = () => {
      URL.revokeObjectURL(url)
      resolve(img.width >= 70 && img.height >= 70)
    }

    img.onerror = () => {
      URL.revokeObjectURL(url)
      resolve(false)
    }

    img.src = url
  })
}

export type createUserSchemaType = z.infer<typeof createUserSchema>
