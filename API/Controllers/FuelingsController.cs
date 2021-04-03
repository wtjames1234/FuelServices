using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Fuelings;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class FuelingsController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Fueling>>> GetFuelings()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]  //fuelings/id
        public async Task<ActionResult<Fueling>> GetFueling(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateFueling(Fueling fueling)
        {
            return Ok(await Mediator.Send(new Create.Command {Fueling = fueling}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditFueling(Guid id, Fueling fueling)
        {
            fueling.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Fueling = fueling}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFueling(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}