import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <header className="mb-5 text-center">
        <h1 className="display-4 text-dark">Absor – Backend Engineer</h1>
        <p className="lead text-secondary">Minimal • Explicit • Deployable</p>
      </header>

      <section className="mb-5">
        <h2 className="text-primary">🧑 Tentang Saya</h2>
        <p className="text-dark">
          Saya adalah backend engineer yang fokus pada arsitektur eksplisit dan deployment tanpa drama. Saya menghindari framework yang menyembunyikan logika dan lebih memilih kontrol penuh atas setiap layer aplikasi.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-success">🚀 Project: Go Web API – Todo Service</h2>
        <p className="text-dark">
          API backend yang dibangun dengan Go, dirancang untuk production-ready deployment. Cocok untuk serverless environment seperti Railway, Supabase Edge Functions, atau Docker container.
        </p>
        <ul className="list-group mt-3">
          <li className="list-group-item">✅ PostgreSQL sebagai database utama</li>
          <li className="list-group-item">🔐 JWT Authentication untuk proteksi endpoint</li>
          <li className="list-group-item">🧪 Validation eksplisit pakai <code>go-playground/validator</code></li>
          <li className="list-group-item">🌐 CORS Middleware untuk akses frontend</li>
          <li className="list-group-item">📄 Swagger UI untuk dokumentasi API</li>
          <li className="list-group-item">🐳 Dockerized untuk deployment yang konsisten</li>
          <li className="list-group-item">🧵 Modular handler & service layer tanpa magic</li>
          <li className="list-group-item">🧼 Error handling RESTful dan eksplisit</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 className="text-danger">🛠️ Stack & Tools</h2>
        <table className="table table-bordered table-hover shadow-sm rounded overflow-hidden">
          <thead style={{ background: 'linear-gradient(to right, #343a40, #495057)', color: 'white' }}>
            <tr>
              <th><span role="img" aria-label="component">🧩</span> Komponen</th>
              <th><span role="img" aria-label="tech">⚙️</span> Teknologi</th>
            </tr>
          </thead>
          <tbody className="table-light">
            <tr><td>Backend</td><td>Go (net/http + chi router)</td></tr>
            <tr><td>Database</td><td>PostgreSQL / Supabase</td></tr>
            <tr><td>Auth</td><td>JWT</td></tr>
            <tr><td>Validation</td><td>go-playground/validator</td></tr>
            <tr><td>Deployment</td><td>Railway / Supabase / Docker</td></tr>
            <tr><td>Dokumentasi</td><td>Swagger UI</td></tr>
          </tbody>
        </table>

        <p className="mt-3 text-dark">
          Bisa di-deploy ke Supabase sebagai Edge Function, atau pakai Railway untuk serverless PostgreSQL + Go runtime. Semua konfigurasi ada di dalam kode, tanpa bergantung pada environment magic.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-info">🔗 Link & Dokumentasi</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
          <div className="col">
            <div className="card h-100 border-dark shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-dark">GitHub Repo</h5>
                <p className="card-text text-secondary">Source code lengkap untuk backend Go Web API.</p>
                <a href="https://github.com/absorkun/darinol" className="btn btn-dark" target="_blank" rel="noopener noreferrer">Lihat Repo</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-primary shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">Swagger UI API Documentation</h5>
                <p className="card-text text-secondary">Dokumentasi interaktif untuk semua endpoint API.</p>
                <a href="https://darinol-production.up.railway.app/docs" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Buka Swagger</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-success shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-success">Source Code UI</h5>
                <p className="card-text text-secondary">Source code lengkap untuk UI yang dibangun dengan React ini.</p>
                <a href="https://github.com/absorkun/portfolio" className="btn btn-success" target="_blank" rel="noopener noreferrer">Coba API</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center text-muted">
        <small>© 2025 Absor. Dibuat dengan React + Bootstrap.</small>
      </footer>
    </div>
  );
}

export default App;
