import { DashboardBox } from "@/components/DashboardBox"
import { useGetKpisQuery } from "@/state/api"

export const Row1 = () => {
  const { data } = useGetKpisQuery()

  return (
    <>
      <DashboardBox gridArea={'a'}></DashboardBox>
      <DashboardBox gridArea={'b'}></DashboardBox>
      <DashboardBox gridArea={'c'}></DashboardBox>
    </>
  )
}
