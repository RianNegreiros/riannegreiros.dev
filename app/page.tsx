import Link from 'next/link'
import { post } from './lib/interface'
import { client } from './lib/sanity'
import { Metadata } from 'next'

async function getData() {
  const query = `*[_type == "post"] | order(firstPublishedDate desc)`

  const data = await client.fetch(query)

  return data
}

export const metadata: Metadata = {
  title: 'Postagens',
}

export default async function IndexPage() {
  const data = (await getData()) as post[]

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700 mt-5">
      <ul>
        {data.map((post) => (
          <li key={post._id} className="py-4">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <div>
                <p className="text-base font-medium leading-6 text-blue-500">
                  {
                    new Date(post.firstPublishedDate)
                      .toISOString()
                      .split('T')[0]
                  }
                </p>
              </div>

              <Link
                href={`/post/${post.slug.current}`}
                prefetch
                className="space-y-3 xl:col-span-3"
              >
                <div>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                    {post.title}
                  </h3>
                </div>

                <p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">
                  {post.overview}
                </p>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
