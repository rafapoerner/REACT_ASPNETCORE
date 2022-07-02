using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProAtividade.Domain.Entities;
using ProAtividade.Domain.Interfaces.Repositories;
using ProAtividade.Domain.Interfaces.Services;

namespace ProAtividade.Domain.Services
{
    public class AtividadeService : IAtividadeService
    {
        private readonly IAtividadeRepo atividadeRepo;

        public AtividadeService(IAtividadeRepo atividadeRepo)
        {
            this.atividadeRepo = atividadeRepo;
        }
        public async Task<Atividade> AdicionarAtividade(Atividade model)
        {
            if (await this.atividadeRepo.PegaPorTituloAsync(model.Titulo) != null)
                throw new Exception("Já existe uma atividade com esse titulo");

            if (await this.atividadeRepo.PegaPorIdAsync(model.Id) == null)
            {
                this.atividadeRepo.Adicionar(model);
                if (await this.atividadeRepo.SalvarMudancasAsync())
                    return model;
            }
            return null;
        }

        public async Task<Atividade> AtualizarAtividade(Atividade model)
        {
            if (model.DataConclusao != null)
                throw new Exception("Não se pode alterar atividade já concluída.");

            if (await this.atividadeRepo.PegaPorIdAsync(model.Id) != null)
            {
                this.atividadeRepo.Atualizar(model);
                if (await this.atividadeRepo.SalvarMudancasAsync())
                    return model;
            }
            return null;
        }
        public async Task<bool> DeletarAtividade(int atividadeId)
        {
            var atividade = await this.atividadeRepo.PegaPorIdAsync(atividadeId);
            if (atividade == null) throw new Exception("Atividade que tentou deletar, não existe.");
            this.atividadeRepo.Deletar(atividade);
            return await this.atividadeRepo.SalvarMudancasAsync();
        }

        public async Task<bool> ConcluirAtividade(Atividade model)
        {
            if (model != null)
            {
                model.Concluir();
                this.atividadeRepo.Atualizar<Atividade>(model);
                return await this.atividadeRepo.SalvarMudancasAsync();
            }
            return false;
        }

        // Task<Atividade> IAtividadeService.PegarAtividadePorIdAsync(int atividadeId)
        // {
        //     throw new NotImplementedException();
        // }
        public async Task<Atividade> PegarAtividadePorIdAsync(int atividadeId)
        {
            try
            {
                var atividade = await this.atividadeRepo.PegaPorIdAsync(atividadeId);
                if (atividade == null) return null;
                return atividade;
            }
            catch (System.Exception ex)
            {

                throw new Exception(ex.Message);
            }
        }

        public async Task<Atividade[]> PegarAtividadesAsync()
        {
            try
            {
                var atividades = await this.atividadeRepo.PegaTodasAsync();
                if (atividades == null) return null;
                return atividades;
            }
            catch (System.Exception ex)
            {

                throw new Exception(ex.Message);
            }
        }
    }
}