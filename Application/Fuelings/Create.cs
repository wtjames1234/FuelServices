using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Fuelings
{
    public class Create
    {
        public class Command : IRequest
        {
            public Fueling Fueling { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Fuelings.Add(request.Fueling);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}