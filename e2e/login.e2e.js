/* eslint-disable no-undef */
import { device, expect, element, by } from 'detox';

describe('Login', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display AppIcon', async () => {
    await expect(element(by.id('AppIcon'))).toBeVisible();
  });

  it('should display Username input', async () => {
    await expect(element(by.id('UsernameInput'))).toBeVisible();
  });

  it('should display Password input', async () => {
    await expect(element(by.id('PasswordInput2'))).toBeVisible();
  });
});
