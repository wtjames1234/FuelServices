using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Fuelings
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Fueling Fueling { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var fueling = await _context.Fuelings.FindAsync(request.Fueling.Id);

                _mapper.Map(request.Fueling, fueling);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}