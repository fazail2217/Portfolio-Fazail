import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const Skills = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [
            'HTML5', 'CSS', 'JavaScript', 'Tailwind', 'React JS', 'Bootstrap',
            'OOP', 'DSA', 'Firebase (Auth, Database)', 'MySQL & DBMS', 'C#', 'C++'
          ],
          datasets: [{
            label: 'Frontend',
            data: [95, 90, 90, 85, 85, 80, 0, 0, 0, 0, 0, 0],
            backgroundColor: 'rgba(5, 150, 105, 0.7)',
            borderColor: 'rgba(5, 150, 105, 1)',
            borderWidth: 1
          }, {
            label: 'Backend & Concepts',
            data: [0, 0, 0, 0, 0, 0, 80, 75, 70, 75, 65, 60],
            backgroundColor: 'rgba(251, 191, 36, 0.7)',
            borderColor: 'rgba(251, 191, 36, 1)',
            borderWidth: 1
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
              labels: { color: '#1F2937' }
            },
            title: {
              display: true,
              text: 'Skill Proficiency (Self-Assessed)',
              color: '#1F2937'
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  let label = context.dataset.label || '';
                  if (label) label += ': ';
                  if (context.parsed.x !== null && context.parsed.x > 0) {
                    label += `${context.label}`;
                  }
                  return label;
                }
              }
            }
          },
          scales: {
            x: { stacked: true, display: false, max: 100, ticks: { color: '#1F2937' } },
            y: { stacked: true, ticks: { color: '#1F2937' } }
          }
        }
      });
    }
    return () => { if (chartInstance.current) chartInstance.current.destroy(); };
  }, []);

  return (
    <section id="skills" className="mb-24">
      <h3 className="text-4xl font-bold text-gray-900 mb-4 text-center">Tech Tool Box</h3>
      <p className="text-center text-white-700 max-w-2xl mx-auto mb-12">My technical abilities span across frontend and backend development (Full Stack Dev). This chart provides a high-level overview of my core competencies, showcasing my versatility as a Full Stack Developer.</p>
      <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md">
        <div className="chart-container relative w-full h-96 max-w-4xl mx-auto">
          <canvas ref={chartRef} id="skillsChart"></canvas>
        </div>
      </div>
    </section>
  );
};

export default Skills;
