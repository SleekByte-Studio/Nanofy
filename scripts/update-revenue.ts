import prisma from "@/services/prisma";

async function main() {
   // Today's Date with time 12:00 am
   const date = new Date()
   date.setDate(date.getDate())

   const users = await prisma.user.findMany()
   users.forEach((user) => {
      const totalCPM = 0
      
      const currentDayRevenue = 
      await prisma.user.update({
         where: {
            id: user.id
         },
         data: {
            balance: {
               increment: 
            }
         }
      })
   })
}

main()