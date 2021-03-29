using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class FuelingsController : BaseApiController
    {
        private readonly DataContext _context;
        public FuelingsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Fueling>>> GetFuelings()
        {
            return await _context.Fuelings.ToListAsync();
        }

        [HttpGet("{id}")]  //fuelings/id
        public async Task<ActionResult<Fueling>> GetFueling(Guid id)
        {
            return await _context.Fuelings.FindAsync(id);
        }
    }
}