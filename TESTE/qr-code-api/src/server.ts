// ARQUIVO COMPLETO: src/server.ts

import fastify from 'fastify';
import qrcode from 'qrcode';
import { z } from 'zod';

const app = fastify();

// Define um "esquema" para validar o dado que chega.
// Ele garante que o corpo da requisição terá um campo "url" que é uma string e uma URL válida.
const urlSchema = z.object({
  url: z.string().url({ message: "URL inválida fornecida." }),
});

// Nossa única rota: POST /generate-qr
app.post('/generate-qr', async (request, reply) => {
  try {
    // 1. Valida se o corpo da requisição corresponde ao nosso esquema
    const { url } = urlSchema.parse(request.body);

    // 2. Usa a biblioteca qrcode para transformar a URL em uma Data URL (uma string que representa a imagem)
    const qrCodeImageString = await qrcode.toDataURL(url, {
      width: 300, // Define a largura da imagem
      margin: 2,   // Define a margem
    });

    // 3. Devolve a string da imagem em um objeto JSON
    return { qrCode: qrCodeImageString };

  } catch (error) {
    console.error(error);
    // Se a validação do Zod falhar ou outro erro ocorrer
    return reply.status(400).send({ message: "Erro ao gerar o QR Code.", error });
  }
});


// --- INICIANDO O SERVIDOR ---
app.listen({ port: 3333 }).then(() => {
  console.log('🚀 Servidor Gerador de QR Code rodando em http://localhost:3333');
});