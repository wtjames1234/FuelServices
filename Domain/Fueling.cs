using System;

namespace Domain
{
    public class Fueling
    {
        public Guid Id { get; set; }
        public string SRONumber { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public int Hours { get; set; }
        public int Odometer { get; set; }
        public string Area { get; set; }
        public decimal Gallons { get; set; }
        public string Requestor { get; set; }
    }
}