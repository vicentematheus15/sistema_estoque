INSERT INTO produtos (nome, categoria, quantidade, valor_unitario, "createdAt", "updatedAt") VALUES
('Detergente Industrial', 'Produtos Quimicos', 50, 12.90, NOW(), NOW()),
('Luva de Borracha', 'Equipamentos de Protecao', 30, 8.50, NOW(), NOW()),
('Chave de Fenda', 'Ferramentas e Acessorios', 20, 15.00, NOW(), NOW()),
('Álcool 70%', 'Produtos Quimicos', 40, 7.50, NOW(), NOW()),
('Capacete de Segurança', 'Equipamentos de Protecao', 15, 45.00, NOW(), NOW());

INSERT INTO movimentacao (id_produto, tipo, quantidade, data_movimentacao, "createdAt", "updatedAt") VALUES
(1, 'entrada', 15, '2026-04-01 08:00:00', NOW(), NOW()),
(2, 'saida',   8,  '2026-04-03 09:30:00', NOW(), NOW()),
(3, 'entrada', 10, '2026-04-05 10:00:00', NOW(), NOW()),
(4, 'entrada', 20, '2026-04-07 11:00:00', NOW(), NOW()),
(5, 'saida',   5,  '2026-04-10 14:00:00', NOW(), NOW()),
(1, 'saida',   10, '2026-05-02 08:00:00', NOW(), NOW()),
(2, 'entrada', 12, '2026-05-05 09:00:00', NOW(), NOW()),
(3, 'saida',   7,  '2026-05-10 10:30:00', NOW(), NOW()),
(4, 'saida',   5,  '2026-05-15 13:00:00', NOW(), NOW()),
(5, 'entrada', 8,  '2026-05-20 15:00:00', NOW(), NOW());