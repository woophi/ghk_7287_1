import { PureCell } from '@alfalab/core-components/pure-cell/cssm';
import { Typography } from '@alfalab/core-components/typography/cssm';

import { useEffect } from 'react';
import { useStocksData } from './hooks/useStocksData';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';

export const App = () => {
  const { stocks } = useStocksData();

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  return (
    <div className={appSt.container}>
      <Typography.TitleResponsive
        tag="h1"
        view="medium"
        font="system"
        weight="semibold"
        color="primary"
        style={{
          marginTop: '1rem',
        }}
      >
        Рекомендованные бумаги
      </Typography.TitleResponsive>
      <Typography.Text view="primary-medium">
        Ставка ЦБ, санкции, валютные колебания влияют на рынок прямо сейчас. Аналитики подобрали бумаги, которые выигрывают
        при таком сценарии.
      </Typography.Text>

      {stocks.map(stock => {
        return (
          <PureCell
            onClick={() => {
              window.gtag('event', '7287_choose_security', { var: 'var1', security_ticker: stock.ticker });
              window.location.replace(stock.link);
            }}
          >
            <PureCell.Graphics verticalAlign="center" key={stock.ticker}>
              <img src={stock.img} width={48} height={48} alt={stock.ticker} />
            </PureCell.Graphics>
            <PureCell.Content>
              <PureCell.Main>
                <Typography.Text view="primary-medium">{stock.name}</Typography.Text>

                <Typography.Text view="primary-small" color="secondary">
                  {stock.ticker}
                </Typography.Text>
              </PureCell.Main>
            </PureCell.Content>
            <PureCell.Addon verticalAlign="top">
              <Typography.Text view="primary-medium" weight="medium">
                {(stock.price * (stock.nominal ?? 1)).toLocaleString('ru-RU')}&nbsp;{stock.currency || '₽'}
              </Typography.Text>
            </PureCell.Addon>
          </PureCell>
        );
      })}

      <Typography.Text view="primary-small" color="secondary">
        Не является индивидуальной инвестиционной рекомендацией
      </Typography.Text>
    </div>
  );
};
