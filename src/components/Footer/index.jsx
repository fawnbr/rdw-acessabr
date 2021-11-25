import './styles.scss';
import backToTop from '../../assets/images/backToTop.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__section footer__section--first">
        <div className="footer__container">
          <p>
            <strong>Observação:</strong> este site é uma amostra de
            desenvolvimento tecnológico de iniciativa independente, as
            informações aqui apresentadas podem estar eventualmente
            desatualizadas, por isso recomendamos sempre conferir as informações
            diretamente com o estabelecimento. A exibição dos locais, nesta
            página não caracteria recomendação de uso.
          </p>
        </div>
      </section>
      <section className="footer__section footer__section--second">
        <div className="footer__container">
          <p>
            <strong>
              Projeto Elaborado durante a RDW{' '}
              <a href="https://ebaconline.com">E.B.A.C</a> 2021
            </strong>
            <small>
              Projetado por{' '}
              <a
                href="https://github.com/cavalcantemmarcelo"
                target="_blank"
                rel="noreferrer"
              >
                Marcelo Cavalcante{' '}
              </a>{' '}
              e{' '}
              <a
                href="https://github.com/mja-maia"
                target="_blank"
                rel="noreferrer"
              >
                Miguel Maia
              </a>
              , desenvolvido por{' '}
              <a
                href="https://github.com/fawnbr"
                target="_blank"
                rel="noreferrer"
              >
                Lucas Vinícius
              </a>
              .
            </small>
          </p>
          <a href="#top" className="footer__btn">
            <img src={backToTop} alt="Voltar ao topo da página" />
          </a>
        </div>
      </section>
    </footer>
  );
};
