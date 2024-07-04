import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

import { PaymentsCreateChargeDto } from './dto/payments-create-charge.dto';

@Injectable()
export class PaymentsService {
  private readonly stripe = new Stripe(
    this.configService.get('STRIPE_SECRET_KEY'),
    {
      apiVersion: '2024-06-20',
    },
  );

  constructor(private readonly configService: ConfigService) {}

  // Note: This flow was deprecated!
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async createCharge({ amount }: PaymentsCreateChargeDto) {
    // const paymentIntent = await this.stripe.paymentIntents.create({
    //   amount: amount * 100,
    //   confirm: true,
    //   currency: 'usd',
    //   payment_method: 'pm_card_visa',
    // });

    // return paymentIntent;
    return { id: Math.round(Math.random() * 100) };
  }
}
