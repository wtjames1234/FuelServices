using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Fuelings.Any()) return;
            
            var fuelings = new List<Fueling>
            {
                new Fueling
                {
                    SRONumber = "4216",
                    Date = DateTime.Now.AddMonths(-2),
                    Description = "Cart Yamaha",
                    Type = "Unleaded",
                    Hours = 68,
                    Odometer = 0,
                    Area = "N",
                    Gallons = 4,
                    Requestor = "PECMC",
                },
                new Fueling
                {
                    SRONumber = "SRSR5609",
                    Date = DateTime.Now.AddMonths(-1),
                    Description = "Forklift",
                    Type = "Diesel",
                    Hours = 876,
                    Odometer = 0,
                    Area = "A",
                    Gallons = 15,
                    Requestor = "Construction",
                },
                new Fueling
                {
                    SRONumber = "586943",
                    Date = DateTime.Now.AddMonths(-1),
                    Description = "Ford F350",
                    Type = "Diesel",
                    Hours = 0,
                    Odometer = 67980,
                    Area = "C",
                    Gallons = 58,
                    Requestor = "PC&AE",
                },
                new Fueling
                {
                    SRONumber = "SRSR223",
                    Date = DateTime.Now.AddMonths(-2),
                    Description = "Tractor",
                    Type = "Unleaded",
                    Hours = 2340,
                    Odometer = 0,
                    Area = "H",
                    Gallons = 17,
                    Requestor = "Maintenance",
                },
                new Fueling
                {
                    SRONumber = "2435",
                    Date = DateTime.Now.AddMonths(-3),
                    Description = "Forklift",
                    Type = "Diesel",
                    Hours = 32,
                    Odometer = 0,
                    Area = "N",
                    Gallons = 2,
                    Requestor = "Rick James",
                },
                new Fueling
                {
                    SRONumber = "SRSR999",
                    Date = DateTime.Now.AddMonths(-4),
                    Description = "Excavator Cat",
                    Type = "Diesel",
                    Hours = 34678,
                    Odometer = 0,
                    Area = "K",
                    Gallons = 9,
                    Requestor = "Construction",
                },
                new Fueling
                {
                    SRONumber = "546",
                    Date = DateTime.Now.AddMonths(-5),
                    Description = "Chevy Suburban",
                    Type = "Unleaded",
                    Hours = 0,
                    Odometer = 78000,
                    Area = "A",
                    Gallons = 30,
                    Requestor = "Centerra",
                },
                new Fueling
                {
                    SRONumber = "SRSR111",
                    Date = DateTime.Now.AddMonths(-6),
                    Description = "Generator Honda",
                    Type = "Diesel",
                    Hours = 11,
                    Odometer = 0,
                    Area = "N",
                    Gallons = 3,
                    Requestor = "Feel & Fuel",
                },
                new Fueling
                {
                    SRONumber = "5666",
                    Date = DateTime.Now.AddMonths(-7),
                    Description = "Concrete saw",
                    Type = "Unleaded",
                    Hours = 56,
                    Odometer = 0,
                    Area = "H",
                    Gallons = 1,
                    Requestor = "Construction",
                },
                new Fueling
                {
                    SRONumber = "G978693",
                    Date = DateTime.Now.AddMonths(-9),
                    Description = "Van Ford",
                    Type = "Unleaded",
                    Hours = 0,
                    Odometer = 99807,
                    Area = "C",
                    Gallons = 34,
                    Requestor = "PC&AE",
                }
            };

            await context.Fuelings.AddRangeAsync(fuelings);
            await context.SaveChangesAsync();
        }
    }
}