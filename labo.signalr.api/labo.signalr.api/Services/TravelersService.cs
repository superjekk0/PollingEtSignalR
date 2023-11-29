using System;
using labo.signalr.api.Data;
using labo.signalr.api.Models;

namespace labo.signalr.api.Services
{
	public class TasksService : BaseService<Task>
	{
		public TasksService(ApplicationDbContext context) : base(context)
		{
		}
	}
}

