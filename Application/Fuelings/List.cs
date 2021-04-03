using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Fuelings
{
    public class List
    {
        public class Query : IRequest<List<Fueling>> { }

        public class Handler : IRequestHandler<Query, List<Fueling>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Fueling>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Fuelings.ToListAsync();
            }
        }
    }
}