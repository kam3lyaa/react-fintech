import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BalanceChart = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current;

    const chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Receitas", "Gastos", "Investimentos", "Objetivos"],
        datasets: [
          {
            data: [6500, 2500, 1500, 1000],
            borderWidth: 1,
          },
        ],
      },
    });

    return () => {
      chart.destroy(); // evita bug de duplicação
    };
  }, []);

  return (
    <article className="container row rounded-5 bg-azul my-3 m-auto text-center">
      
      <h2 className="meu_texto p-3 mes-grafico">
        Balanço do mês de Outubro
      </h2>

      <div className="col-6 p-5 m-auto">
        <canvas ref={canvasRef} className="grafico" />
      </div>

    </article>
  );
};

export default BalanceChart;