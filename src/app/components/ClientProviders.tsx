'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import Modal from './Modal';
import FloatingButtons from './FloatingButtons';

interface ModalContextType {
  openModal: (preselectedService?: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ClientProviders');
  }
  return context;
}

export default function ClientProviders({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  const openModal = (service: string = '') => {
    setPreselectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPreselectedService('');
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Let's Get Started"
        preselectedService={preselectedService}
      />
      <FloatingButtons />
    </ModalContext.Provider>
  );
}

