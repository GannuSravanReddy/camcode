import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';

const Sidebar = () => {
    return (
        <>
            <aside className="bd-sidebar">
                <nav className="collapse bd-links" id="bd-docs-nav" aria-label="Docs navigation">

                    <ul className="list-unstyled mb-0 py-3 pt-md-1">

                        <li class="mb-1">
                            <button class="btn d-inline-flex align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#getting-started-collapse" aria-expanded="false">
                                Getting started
                            </button>

                            <div class="collapse" id="getting-started-collapse">
                                <ul class="list-unstyled fw-normal pb-1 small">
                                    <li><a href="/docs/5.0/getting-started/introduction/" class="d-inline-flex align-items-center rounded">Introduction</a></li>
                                    <li><a href="/docs/5.0/getting-started/download/" class="d-inline-flex align-items-center rounded">Download</a></li>
                                    <li><a href="/docs/5.0/getting-started/contents/" class="d-inline-flex align-items-center rounded">Contents</a></li>
                                    <li><a href="/docs/5.0/getting-started/browsers-devices/" class="d-inline-flex align-items-center rounded">Browsers &amp; devices</a></li>
                                    <li><a href="/docs/5.0/getting-started/javascript/" class="d-inline-flex align-items-center rounded">JavaScript</a></li>
                                    <li><a href="/docs/5.0/getting-started/build-tools/" class="d-inline-flex align-items-center rounded">Build tools</a></li>
                                    <li><a href="/docs/5.0/getting-started/webpack/" class="d-inline-flex align-items-center rounded">Webpack</a></li>
                                    <li><a href="/docs/5.0/getting-started/parcel/" class="d-inline-flex align-items-center rounded">Parcel</a></li>
                                    <li><a href="/docs/5.0/getting-started/accessibility/" class="d-inline-flex align-items-center rounded">Accessibility</a></li>
                                    <li><a href="/docs/5.0/getting-started/rfs/" class="d-inline-flex align-items-center rounded">RFS</a></li>
                                    <li><a href="/docs/5.0/getting-started/rtl/" class="d-inline-flex align-items-center rounded">RTL</a></li>
                                </ul>
                            </div>
                        </li>

                    </ul>
                </nav>
            </aside>
        </>
    );
}

export default Sidebar;