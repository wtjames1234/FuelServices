using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Fuelings
{
    public class Details
    {
        public class Query : IRequest<Fueling>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Fueling>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Fueling> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Fuelings.FindAsync(request.Id);
            }
        }
    }
}