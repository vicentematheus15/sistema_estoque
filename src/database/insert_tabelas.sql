INSERT INTO produtos (nome, categoria, quantidade, valor_unitario, "createdAt", "updatedAt") VALUES
('Detergente Industrial', 'Produtos Quimicos', 50, 12.90, NOW(), NOW()),
('Luva de Borracha', 'Equipamentos de Protecao', 30, 8.50, NOW(), NOW()),
('Chave de Fenda', 'Ferramentas e Acessorios', 20, 15.00, NOW(), NOW());

INSERT INTO movimentacao (id_produto, tipo, quantidade, data_movimentacao, "createdAt", "updatedAt") VALUES
(1, 'entrada', 20, NOW(), NOW(), NOW()),
(2, 'entrada', 10, NOW(), NOW(), NOW()),
(3, 'saida', 5, NOW(), NOW(), NOW());