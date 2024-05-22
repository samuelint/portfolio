import { ProjectsPosts } from "./posts"


export const metadata = {
  title: 'Projects',
  description: 'My projects and achievements',
}

export default function Page() {
  return (
    <section>
      <h1 className="title">Projects</h1>
      <ProjectsPosts />
    </section>
  )
}
