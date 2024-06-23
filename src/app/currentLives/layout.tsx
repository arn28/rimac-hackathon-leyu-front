import Link from 'next/link'

export default function DashboardBienestar({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main
      className={`p-8 min-h-svh flex flex-col items-center justify-start bg-[url('../assets/img/bg_light.svg')] bg-cover`}
    >
      {children}
    </main>
  )
}
