function solve() {
   document.querySelector("#btnSend").addEventListener("click", onClick);
   const textarea = document.querySelector("#inputs>textarea");
   const restaurantP = document.querySelector("#bestRestaurant>p");
   const workersP = document.querySelector("#outputs #workers p");
   function onClick() {
      const input = JSON.parse(textarea.value)
      let restaurants = {}; 
 
      input.forEach(el => {
         const tokens = el.split(' - ')
         const name = tokens[0]
         const workersArray = tokens[1].split(', ')
         let workers = []
         for (const worker of workersArray) {
            const [name, salary] = worker.split(' ')
            workers.push({ name, salary: Number(salary) })
 
         }
         if (restaurants[name]) {
            workers = workers.concat(restaurants[name].workers)
         }
 
         workers.sort((a, b) => b.salary - a.salary)
         let bestSalary = workers[0].salary
         let averageSalary = workers.reduce((sum, val) => sum + val.salary, 0) / workers.length
         restaurants[name] = {
            workers,
            averageSalary: Number(averageSalary),
            bestSalary: Number(bestSalary)
         }
      });
      let bestSalary = 0;
      let bestRestaurant = null
      for (const name in restaurants) {
         if (restaurants[name].averageSalary > bestSalary) {
            bestSalary = restaurants[name].averageSalary
            bestRestaurant = { name, ...restaurants[name] }
 
         }
      }
      console.log(bestRestaurant);
      restaurantP.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`
      let workerRes = []
      bestRestaurant.workers.forEach(worker => {
         workerRes.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
      })
      workersP.textContent = workerRes.join(' ')
   }
}