using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProAtividade.Data.Context;
using ProAtividade.Domain.Interfaces.Repositories;

namespace ProAtividade.Data.Repositories
{
    public class GeralRepo : IGeralRepo
    {
        private readonly DataContext context;
        public GeralRepo(DataContext context)
        {
            this.context = context;
        }
        public void Adicionar<T>(T entity) where T : class
        {
            this.context.Add(entity);
        }

        public void Atualizar<T>(T entity) where T : class
        {
            this.context.Update(entity);
        }

        public void Deletar<T>(T entity) where T : class
        {
            this.context.Remove(entity);
        }

        public void DeletarVarias<T>(T[] entityArray) where T : class
        {
            this.context.RemoveRange(entityArray);
        }

        public async Task<bool> SalvarMudancasAsync()
        {
            return (await this.context.SaveChangesAsync() > 0);
        }
    }
}