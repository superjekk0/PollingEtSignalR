using labo.signalr.api.Models;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace labo.signalr.api.Hubs
{
    public class TaskHub : Hub
    {
        static int nbConnexions = 0;
        static List<UselessTask> tasks = new();
        public override async Task OnConnectedAsync()
        {
            await base.OnConnectedAsync();
            ++nbConnexions;
            await NbClients();
        }
        public override async Task OnDisconnectedAsync(Exception? exception)
        {
            --nbConnexions;
            await base.OnDisconnectedAsync(exception);
        }

        public async Task NbClients()
        {
            await Clients.All.SendAsync(nameof(NbClients), nbConnexions);
        }

        public async Task GetAll()
        {
            await Clients.All.SendAsync(nameof(GetAll), tasks);
        }

        public async Task AjoutTask(string task)
        {
            tasks.Add(new UselessTask { Text = task, Completed = false, Id = tasks.Count });
            await GetAll();
        }

        public async Task Completer(int taskId)
        {
            UselessTask task = tasks.Find(t => t.Id == taskId)!;
            task.Completed = true;
            await GetAll();
        }
    }
}
